:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-usage'
.. highlight: bash

perl-pod-usage
==============

.. conda:recipe:: perl-pod-usage
   :replaces_section_title:
   :noindex:

   Print a usage message from embedded pod documentation.

   :homepage: https://metacpan.org/pod/Pod::Usage
   :license: perl_5
   :recipe: /`perl-pod-usage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage/meta.yaml>`_

   


.. conda:package:: perl-pod-usage

   |downloads_perl-pod-usage| |docker_perl-pod-usage|

   :versions:
      
      

      ``2.05-0``,  ``2.03-0``,  ``2.01-0``,  ``1.69-2``,  ``1.69-1``,  ``1.69-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-getopt-long: 
   :depends perl-pod-escapes: 
   :depends perl-test: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-pod-usage

   and update with::

      mamba update perl-pod-usage

  To create a new environment, run::

      mamba create --name myenvname perl-pod-usage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-usage:<tag>

   (see `perl-pod-usage/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-usage| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-usage.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-usage
   :alt:   (downloads)
.. |docker_perl-pod-usage| image:: https://quay.io/repository/biocontainers/perl-pod-usage/status
   :target: https://quay.io/repository/biocontainers/perl-pod-usage
.. _`perl-pod-usage/tags`: https://quay.io/repository/biocontainers/perl-pod-usage?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-usage";
        var versions = ["2.05","2.03","2.01","1.69","1.69"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-usage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-usage/README.html