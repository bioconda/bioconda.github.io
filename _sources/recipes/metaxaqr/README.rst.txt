:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaxaqr'
.. highlight: bash

metaxaqr
========

.. conda:recipe:: metaxaqr
   :replaces_section_title:
   :noindex:

   Improved Identification and Taxonomic Classification of Small and Large Subunit rRNA in Metagenomic Data.

   :homepage: http://microbiology.se/software/metaxaQR/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`metaxaqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxaqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxaqr/meta.yaml>`_
   :links: biotools: :biotools:`metaxaqr`, doi: :doi:`10.1093/bioinformatics/bty482`, doi: :doi:`10.1111/1755-0998.12399`

   


.. conda:package:: metaxaqr

   |downloads_metaxaqr| |docker_metaxaqr|

   :versions:
      
      

      ``3.0rc2-0``,  ``3.0rc1.1-0``

      

   
   :depends on hmmer: ``>=3.3``
   :depends on mafft: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on vsearch: ``>=2.7.0``

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

    pixi global install metaxaqr

to add into an existing workspace instead, run::

    pixi add metaxaqr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaxaqr

Alternatively, to install into a new environment, run::

    conda create -n envname metaxaqr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaxaqr:<tag>

(see `metaxaqr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaxaqr| image:: https://img.shields.io/conda/dn/bioconda/metaxaqr.svg?style=flat
   :target: https://anaconda.org/bioconda/metaxaqr
   :alt:   (downloads)
.. |docker_metaxaqr| image:: https://quay.io/repository/biocontainers/metaxaqr/status
   :target: https://quay.io/repository/biocontainers/metaxaqr
.. _`metaxaqr/tags`: https://quay.io/repository/biocontainers/metaxaqr?tab=tags


.. raw:: html

    <script>
        var package = "metaxaqr";
        var versions = ["3.0rc2","3.0rc1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaxaqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaxaqr/README.html