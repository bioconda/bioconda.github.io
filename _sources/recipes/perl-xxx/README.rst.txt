:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xxx'
.. highlight: bash

perl-xxx
========

.. conda:recipe:: perl-xxx/0.35
   :replaces_section_title:
   :noindex:

   See Your Data in the Nude

   :homepage: https://github.com/ingydotnet/xxx-pm
   :license: perl artistic
   :recipe: /`perl-xxx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xxx>`_/`0.35 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xxx/0.35>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xxx/0.35/meta.yaml>`_

   


.. conda:package:: perl-xxx

   |downloads_perl-xxx| |docker_perl-xxx|

   :versions:
      
      

      ``0.35-1``,  ``0.35-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-yaml-pp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xxx

   and update with::

      conda update perl-xxx

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xxx:<tag>

   (see `perl-xxx/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xxx| image:: https://img.shields.io/conda/dn/bioconda/perl-xxx.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xxx
   :alt:   (downloads)
.. |docker_perl-xxx| image:: https://quay.io/repository/biocontainers/perl-xxx/status
   :target: https://quay.io/repository/biocontainers/perl-xxx
.. _`perl-xxx/tags`: https://quay.io/repository/biocontainers/perl-xxx?tab=tags


.. raw:: html

    <script>
        var package = "perl-xxx";
        var versions = ["0.35","0.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xxx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xxx/README.html