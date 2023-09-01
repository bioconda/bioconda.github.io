:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'encyclopedia'
.. highlight: bash

encyclopedia
============

.. conda:recipe:: encyclopedia
   :replaces_section_title:
   :noindex:

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis

   :homepage: https://bitbucket.org/searleb/encyclopedia/wiki/Home
   :license: APACHE / Apache License 2.0
   :recipe: /`encyclopedia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia/meta.yaml>`_
   :links: biotools: :biotools:`encyclopedia`, doi: :doi:`10.1038/s41467-018-07454-w`

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis
   and can search for peptides using either DDA\-based spectrum libraries or
   DIA\-based chromatogram libraries.
   Check out our manuscript describing EncyclopeDIA at Nature Communications \(Searle et al\, 2018\)
   for more information. EncyclopeDIA contains Walnut\, an implementation of 
   the PECAN \(Ting et al\, 2017\) scoring system\, to enable chromatogram library generation
   from FASTA protein sequence databases when spectrum libraries are unavailable.



.. conda:package:: encyclopedia

   |downloads_encyclopedia| |docker_encyclopedia|

   :versions:
      
      

      ``2.12.30-0``,  ``1.12.34-0``,  ``1.2.2-0``,  ``0.9.5-3``,  ``0.9.5-2``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.0-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends openjdk: ``>=11``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install encyclopedia

   and update with::

      mamba update encyclopedia

  To create a new environment, run::

      mamba create --name myenvname encyclopedia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/encyclopedia:<tag>

   (see `encyclopedia/tags`_ for valid values for ``<tag>``)


.. |downloads_encyclopedia| image:: https://img.shields.io/conda/dn/bioconda/encyclopedia.svg?style=flat
   :target: https://anaconda.org/bioconda/encyclopedia
   :alt:   (downloads)
.. |docker_encyclopedia| image:: https://quay.io/repository/biocontainers/encyclopedia/status
   :target: https://quay.io/repository/biocontainers/encyclopedia
.. _`encyclopedia/tags`: https://quay.io/repository/biocontainers/encyclopedia?tab=tags


.. raw:: html

    <script>
        var package = "encyclopedia";
        var versions = ["2.12.30","1.12.34","1.2.2","0.9.5","0.9.5"];
    </script>





Notes
-----
EncyclopeDIA is Java program that comes with a custom wrapper python shell script.
This shell wrapper is called \"EncyclopeDIA\" and is on \$PATH by default. By default
\"\-Xms1g \-Xmx8g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"EncyclopeDIA \-Xms512m \-Xmx16g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/encyclopedia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/encyclopedia/README.html