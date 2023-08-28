:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-escapes'
.. highlight: bash

perl-pod-escapes
================

.. conda:recipe:: perl-pod-escapes/1.07
   :replaces_section_title:
   :noindex:

   for resolving Pod Elt...gt sequences

   :homepage: http://metacpan.org/pod/Pod::Escapes
   :license: perl_5
   :recipe: /`perl-pod-escapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes>`_/`1.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07/meta.yaml>`_

   


.. conda:package:: perl-pod-escapes

   |downloads_perl-pod-escapes| |docker_perl-pod-escapes|

   :versions:
      
      

      ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: 
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

      mamba install perl-pod-escapes

   and update with::

      mamba update perl-pod-escapes

  To create a new environment, run::

      mamba create --name myenvname perl-pod-escapes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-escapes:<tag>

   (see `perl-pod-escapes/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-escapes| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-escapes.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-escapes
   :alt:   (downloads)
.. |docker_perl-pod-escapes| image:: https://quay.io/repository/biocontainers/perl-pod-escapes/status
   :target: https://quay.io/repository/biocontainers/perl-pod-escapes
.. _`perl-pod-escapes/tags`: https://quay.io/repository/biocontainers/perl-pod-escapes?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-escapes";
        var versions = ["1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-escapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-escapes/README.html