:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cg-pipeline'
.. highlight: bash

perl-cg-pipeline
================

.. conda:recipe:: perl-cg-pipeline
   :replaces_section_title:
   :noindex:

   Perl libraries required for CG\-Pipeline.

   :homepage: https://github.com/lskatz/CG-Pipeline
   :license: GPL / GNU GPL
   :recipe: /`perl-cg-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cg-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cg-pipeline/meta.yaml>`_

   


.. conda:package:: perl-cg-pipeline

   |downloads_perl-cg-pipeline| |docker_perl-cg-pipeline|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-dbi: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-spec: 
   :depends perl-file-temp: 
   :depends perl-storable: 
   :depends perl-xml-dom: 
   :depends perl-xml-dom-xpath: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-cg-pipeline

   and update with::

      mamba update perl-cg-pipeline

  To create a new environment, run::

      mamba create --name myenvname perl-cg-pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cg-pipeline:<tag>

   (see `perl-cg-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cg-pipeline| image:: https://img.shields.io/conda/dn/bioconda/perl-cg-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cg-pipeline
   :alt:   (downloads)
.. |docker_perl-cg-pipeline| image:: https://quay.io/repository/biocontainers/perl-cg-pipeline/status
   :target: https://quay.io/repository/biocontainers/perl-cg-pipeline
.. _`perl-cg-pipeline/tags`: https://quay.io/repository/biocontainers/perl-cg-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "perl-cg-pipeline";
        var versions = ["0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cg-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cg-pipeline/README.html