:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-pager'
.. highlight: bash

perl-io-pager
=============

.. conda:recipe:: perl-io-pager/2.10
   :replaces_section_title:
   :noindex:

   Select a pager \(possibly perl\-based\) \& pipe it text if a TTY

   :homepage: http://metacpan.org/pod/IO-Pager
   :license: Artistic
   :recipe: /`perl-io-pager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-pager>`_/`2.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-pager/2.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-pager/2.10/meta.yaml>`_

   


.. conda:package:: perl-io-pager

   |downloads_perl-io-pager| |docker_perl-io-pager|

   :versions:
      
      

      ``2.10-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-file-which: 
   :depends perl-termreadkey: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-pager

   and update with::

      conda update perl-io-pager

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-pager:<tag>

   (see `perl-io-pager/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-pager| image:: https://img.shields.io/conda/dn/bioconda/perl-io-pager.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-pager
   :alt:   (downloads)
.. |docker_perl-io-pager| image:: https://quay.io/repository/biocontainers/perl-io-pager/status
   :target: https://quay.io/repository/biocontainers/perl-io-pager
.. _`perl-io-pager/tags`: https://quay.io/repository/biocontainers/perl-io-pager?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-pager";
        var versions = ["2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-pager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-pager/README.html