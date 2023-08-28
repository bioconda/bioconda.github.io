:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fast'
.. highlight: bash

perl-fast
=========

.. conda:recipe:: perl-fast
   :replaces_section_title:
   :noindex:

   FAST Analysis of Sequences Toolbox

   :homepage: http://metacpan.org/pod/FAST
   :license: Artistic-2.0
   :recipe: /`perl-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fast/meta.yaml>`_

   


.. conda:package:: perl-fast

   |downloads_perl-fast| |docker_perl-fast|

   :versions:
      
      

      ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bit-vector: 
   :depends perl-pod-usage: 
   :depends perl-sort-key: 
   :depends perl-sort-mergesort: 
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

      mamba install perl-fast

   and update with::

      mamba update perl-fast

  To create a new environment, run::

      mamba create --name myenvname perl-fast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-fast:<tag>

   (see `perl-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fast
   :alt:   (downloads)
.. |docker_perl-fast| image:: https://quay.io/repository/biocontainers/perl-fast/status
   :target: https://quay.io/repository/biocontainers/perl-fast
.. _`perl-fast/tags`: https://quay.io/repository/biocontainers/perl-fast?tab=tags


.. raw:: html

    <script>
        var package = "perl-fast";
        var versions = ["1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fast/README.html