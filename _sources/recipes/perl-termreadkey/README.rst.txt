:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-termreadkey'
.. highlight: bash

perl-termreadkey
================

.. conda:recipe:: perl-termreadkey
   :replaces_section_title:
   :noindex:

   A perl module for simple terminal control

   :homepage: http://metacpan.org/pod/TermReadKey
   :license: perl_5
   :recipe: /`perl-termreadkey <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-termreadkey>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-termreadkey/meta.yaml>`_

   


.. conda:package:: perl-termreadkey

   |downloads_perl-termreadkey| |docker_perl-termreadkey|

   :versions:
      
      

      ``2.38-3``,  ``2.38-2``,  ``2.38-1``,  ``2.38-0``,  ``2.37-0``,  ``2.32-1``,  ``2.32-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-termreadkey

   and update with::

      conda update perl-termreadkey

   or use the docker container::

      docker pull quay.io/biocontainers/perl-termreadkey:<tag>

   (see `perl-termreadkey/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-termreadkey| image:: https://img.shields.io/conda/dn/bioconda/perl-termreadkey.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-termreadkey
   :alt:   (downloads)
.. |docker_perl-termreadkey| image:: https://quay.io/repository/biocontainers/perl-termreadkey/status
   :target: https://quay.io/repository/biocontainers/perl-termreadkey
.. _`perl-termreadkey/tags`: https://quay.io/repository/biocontainers/perl-termreadkey?tab=tags


.. raw:: html

    <script>
        var package = "perl-termreadkey";
        var versions = ["2.38","2.38","2.38","2.38","2.37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-termreadkey/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-termreadkey/README.html