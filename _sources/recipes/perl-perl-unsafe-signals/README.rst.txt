:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-unsafe-signals'
.. highlight: bash

perl-perl-unsafe-signals
========================

.. conda:recipe:: perl-perl-unsafe-signals
   :replaces_section_title:
   :noindex:

   Allow unsafe handling of signals in selected blocks

   :homepage: http://metacpan.org/pod/Perl::Unsafe::Signals
   :license: perl_5
   :recipe: /`perl-perl-unsafe-signals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals/meta.yaml>`_

   


.. conda:package:: perl-perl-unsafe-signals

   |downloads_perl-perl-unsafe-signals| |docker_perl-perl-unsafe-signals|

   :versions:
      
      

      ``0.03-3``,  ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl-unsafe-signals

   and update with::

      conda update perl-perl-unsafe-signals

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perl-unsafe-signals:<tag>

   (see `perl-perl-unsafe-signals/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-unsafe-signals| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-unsafe-signals.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-unsafe-signals
   :alt:   (downloads)
.. |docker_perl-perl-unsafe-signals| image:: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals/status
   :target: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals
.. _`perl-perl-unsafe-signals/tags`: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-unsafe-signals";
        var versions = ["0.03","0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html