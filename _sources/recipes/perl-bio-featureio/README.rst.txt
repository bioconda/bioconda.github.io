:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-featureio'
.. highlight: bash

perl-bio-featureio
==================

.. conda:recipe:: perl-bio-featureio
   :replaces_section_title:
   :noindex:

   Modules for reading\, writing\, and manipulating sequence features

   :homepage: https://metacpan.org/release/Bio-FeatureIO
   :license: perl_5
   :recipe: /`perl-bio-featureio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio/meta.yaml>`_

   


.. conda:package:: perl-bio-featureio

   |downloads_perl-bio-featureio| |docker_perl-bio-featureio|

   :versions:
      
      

      ``1.6.905-4``,  ``1.6.905-3``,  ``1.6.905-2``,  ``1.6.905-1``,  ``1.6.905-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :depends perl-tree-dag_node: 
   :depends perl-uri: 
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

      mamba install perl-bio-featureio

   and update with::

      mamba update perl-bio-featureio

  To create a new environment, run::

      mamba create --name myenvname perl-bio-featureio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-featureio:<tag>

   (see `perl-bio-featureio/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-featureio| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-featureio.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-featureio
   :alt:   (downloads)
.. |docker_perl-bio-featureio| image:: https://quay.io/repository/biocontainers/perl-bio-featureio/status
   :target: https://quay.io/repository/biocontainers/perl-bio-featureio
.. _`perl-bio-featureio/tags`: https://quay.io/repository/biocontainers/perl-bio-featureio?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-featureio";
        var versions = ["1.6.905","1.6.905","1.6.905","1.6.905","1.6.905"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-featureio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-featureio/README.html