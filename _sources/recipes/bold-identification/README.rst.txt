:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bold-identification'
.. highlight: bash

bold-identification
===================

.. conda:recipe:: bold-identification
   :replaces_section_title:
   :noindex:

   A tool for taxonomic assignment for given sequences using the BOLD database \(http\:\/\/www.boldsystems.org\/index.php\)

   :homepage: https://github.com/linzhi2013/bold_identification
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`bold-identification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification/meta.yaml>`_
   :links: biotools: :biotools:`bold-identification`

   


.. conda:package:: bold-identification

   |downloads_bold-identification| |docker_bold-identification|

   :versions:
      
      

      ``0.0.27-0``,  ``0.0.25-0``

      

   
   :depends on beautifulsoup4: 
   :depends on biopython: ``>1.5``
   :depends on html5lib: 
   :depends on python: ``>=3.5``
   :depends on requests: 

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

    pixi global install bold-identification

to add into an existing workspace instead, run::

    pixi add bold-identification

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bold-identification

Alternatively, to install into a new environment, run::

    conda create -n envname bold-identification

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bold-identification:<tag>

(see `bold-identification/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bold-identification| image:: https://img.shields.io/conda/dn/bioconda/bold-identification.svg?style=flat
   :target: https://anaconda.org/bioconda/bold-identification
   :alt:   (downloads)
.. |docker_bold-identification| image:: https://quay.io/repository/biocontainers/bold-identification/status
   :target: https://quay.io/repository/biocontainers/bold-identification
.. _`bold-identification/tags`: https://quay.io/repository/biocontainers/bold-identification?tab=tags


.. raw:: html

    <script>
        var package = "bold-identification";
        var versions = ["0.0.27","0.0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bold-identification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bold-identification/README.html