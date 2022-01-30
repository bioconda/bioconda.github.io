:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-extract-use'
.. highlight: bash

perl-module-extract-use
=======================

.. conda:recipe:: perl-module-extract-use/1.043
   :replaces_section_title:
   :noindex:

   Pull out the modules a module explicitly uses

   :homepage: https://github.com/briandfoy/module-extract-use
   :license: artistic_2
   :recipe: /`perl-module-extract-use <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-extract-use>`_/`1.043 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-extract-use/1.043>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-extract-use/1.043/meta.yaml>`_

   


.. conda:package:: perl-module-extract-use

   |downloads_perl-module-extract-use| |docker_perl-module-extract-use|

   :versions:
      
      

      ``1.043-3``,  ``1.043-2``,  ``1.043-1``,  ``1.043-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-ppi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-extract-use

   and update with::

      conda update perl-module-extract-use

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-extract-use:<tag>

   (see `perl-module-extract-use/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-extract-use| image:: https://img.shields.io/conda/dn/bioconda/perl-module-extract-use.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-extract-use
   :alt:   (downloads)
.. |docker_perl-module-extract-use| image:: https://quay.io/repository/biocontainers/perl-module-extract-use/status
   :target: https://quay.io/repository/biocontainers/perl-module-extract-use
.. _`perl-module-extract-use/tags`: https://quay.io/repository/biocontainers/perl-module-extract-use?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-extract-use";
        var versions = ["1.043","1.043","1.043","1.043"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-extract-use/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-extract-use/README.html