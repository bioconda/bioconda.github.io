:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-max_inscribed_circles'
.. highlight: bash

fiji-max_inscribed_circles
==========================

.. conda:recipe:: fiji-max_inscribed_circles
   :replaces_section_title:
   :noindex:

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm using a euclidean distance map

   :homepage: https://imagej.net/plugins/max-inscribed-circles
   :developer docs: https://github.com/BIOP/ijp-max-inscribed-circles
   :license: GPLv3
   :recipe: /`fiji-max_inscribed_circles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles/meta.yaml>`_

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm
   which runs over a binary image or selection in order to fit the maximum number
   of non\-touching circles down to a minimum diameter.
   The approach uses a Euclidean Distance Map in order to find candidate circles
   from the largest to the smallest.
   The code is written for Java 8\,
   which is the currently supported Java version for Fiji and ImageJ.



.. conda:package:: fiji-max_inscribed_circles

   |downloads_fiji-max_inscribed_circles| |docker_fiji-max_inscribed_circles|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.0-0``,  ``1.1.2-0``

      

   
   :depends on fiji: ``>=20220414``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install fiji-max_inscribed_circles

to add into an existing workspace instead, run::

    pixi add fiji-max_inscribed_circles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fiji-max_inscribed_circles

Alternatively, to install into a new environment, run::

    conda create -n envname fiji-max_inscribed_circles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fiji-max_inscribed_circles:<tag>

(see `fiji-max_inscribed_circles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fiji-max_inscribed_circles| image:: https://img.shields.io/conda/dn/bioconda/fiji-max_inscribed_circles.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-max_inscribed_circles
   :alt:   (downloads)
.. |docker_fiji-max_inscribed_circles| image:: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles/status
   :target: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles
.. _`fiji-max_inscribed_circles/tags`: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles?tab=tags


.. raw:: html

    <script>
        var package = "fiji-max_inscribed_circles";
        var versions = ["2.1.0","2.0.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html