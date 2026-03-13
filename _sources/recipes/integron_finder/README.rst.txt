:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'integron_finder'
.. highlight: bash

integron_finder
===============

.. conda:recipe:: integron_finder
   :replaces_section_title:
   :noindex:

   Integron Finder aims at detecting integrons in DNA sequences.

   :homepage: https://github.com/gem-pasteur/Integron_Finder
   :documentation: https://integronfinder.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`integron_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder/meta.yaml>`_
   :links: doi: :doi:`10.3390/microorganisms10040700`

   


.. conda:package:: integron_finder

   |downloads_integron_finder| |docker_integron_finder|

   :versions:
      
      

      ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0rc6-0``

      

   
   :depends on biopython: ``>=1.82``
   :depends on colorlog: 
   :depends on hmmer: ``>=3.1b2,<=3.3.2``
   :depends on infernal: ``>=1.1.2,<=1.1.4``
   :depends on matplotlib-base: ``>=3.8``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2``
   :depends on prodigal: ``>=2.6.3``
   :depends on python: ``>=3.10``

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

    pixi global install integron_finder

to add into an existing workspace instead, run::

    pixi add integron_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install integron_finder

Alternatively, to install into a new environment, run::

    conda create -n envname integron_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/integron_finder:<tag>

(see `integron_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_integron_finder| image:: https://img.shields.io/conda/dn/bioconda/integron_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/integron_finder
   :alt:   (downloads)
.. |docker_integron_finder| image:: https://quay.io/repository/biocontainers/integron_finder/status
   :target: https://quay.io/repository/biocontainers/integron_finder
.. _`integron_finder/tags`: https://quay.io/repository/biocontainers/integron_finder?tab=tags


.. raw:: html

    <script>
        var package = "integron_finder";
        var versions = ["2.0.6","2.0.5","2.0.3","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/integron_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/integron_finder/README.html