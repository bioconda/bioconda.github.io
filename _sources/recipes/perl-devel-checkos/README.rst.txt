:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkos'
.. highlight: bash

perl-devel-checkos
==================

.. conda:recipe:: perl-devel-checkos/1.81
   :replaces_section_title:
   :noindex:

   check what OS we\'re running on

   :homepage: http://metacpan.org/pod/Devel::CheckOS
   :license: unknown
   :recipe: /`perl-devel-checkos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos>`_/`1.81 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81/meta.yaml>`_

   


.. conda:package:: perl-devel-checkos

   |downloads_perl-devel-checkos| |docker_perl-devel-checkos|

   :versions:
      
      

      ``1.81-1``,  ``1.81-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-compare: 
   :depends perl-file-find-rule: 
   :depends perl-file-temp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-checkos

   and update with::

      conda update perl-devel-checkos

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-checkos:<tag>

   (see `perl-devel-checkos/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-checkos| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkos.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkos
   :alt:   (downloads)
.. |docker_perl-devel-checkos| image:: https://quay.io/repository/biocontainers/perl-devel-checkos/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkos
.. _`perl-devel-checkos/tags`: https://quay.io/repository/biocontainers/perl-devel-checkos?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checkos";
        var versions = ["1.81","1.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkos/README.html