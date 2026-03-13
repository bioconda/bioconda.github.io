:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'voyager'
.. highlight: bash

voyager
=======

.. conda:recipe:: voyager
   :replaces_section_title:
   :noindex:

   Rapid and efficient mapping algorithm for long sequencing reads with insertion\- and deletion errors.

   :homepage: https://bitbucket.org/sverre-phd-work/voyager/
   :documentation: https://bitbucket.org/sverre-phd-work/voyager/wiki/Home
   
   :license: LGPL-3.0-only
   :recipe: /`voyager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voyager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voyager/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.04.13.589333`

   


.. conda:package:: voyager

   |downloads_voyager| |docker_voyager|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on openjdk: ``>=11``

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

    pixi global install voyager

to add into an existing workspace instead, run::

    pixi add voyager

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install voyager

Alternatively, to install into a new environment, run::

    conda create -n envname voyager

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/voyager:<tag>

(see `voyager/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_voyager| image:: https://img.shields.io/conda/dn/bioconda/voyager.svg?style=flat
   :target: https://anaconda.org/bioconda/voyager
   :alt:   (downloads)
.. |docker_voyager| image:: https://quay.io/repository/biocontainers/voyager/status
   :target: https://quay.io/repository/biocontainers/voyager
.. _`voyager/tags`: https://quay.io/repository/biocontainers/voyager?tab=tags


.. raw:: html

    <script>
        var package = "voyager";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/voyager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/voyager/README.html