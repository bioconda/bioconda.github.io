:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sure'
.. highlight: bash

sure
====

.. conda:recipe:: sure
   :replaces_section_title:
   :noindex:

   utility belt for automated testing in python for python

   :homepage: http://github.com/gabrielfalcao/sure
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`sure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure/meta.yaml>`_

   


.. conda:package:: sure

   |downloads_sure| |docker_sure|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.11-0``,  ``1.2.24-0``

      

   
   :depends on mock: 
   :depends on python: 
   :depends on six: 

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

    pixi global install sure

to add into an existing workspace instead, run::

    pixi add sure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sure

Alternatively, to install into a new environment, run::

    conda create -n envname sure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sure:<tag>

(see `sure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sure| image:: https://img.shields.io/conda/dn/bioconda/sure.svg?style=flat
   :target: https://anaconda.org/bioconda/sure
   :alt:   (downloads)
.. |docker_sure| image:: https://quay.io/repository/biocontainers/sure/status
   :target: https://quay.io/repository/biocontainers/sure
.. _`sure/tags`: https://quay.io/repository/biocontainers/sure?tab=tags


.. raw:: html

    <script>
        var package = "sure";
        var versions = ["2.0.1","2.0.0","1.4.11","1.2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sure/README.html