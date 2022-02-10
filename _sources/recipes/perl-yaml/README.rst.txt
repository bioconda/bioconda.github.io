:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-yaml'
.. highlight: bash

perl-yaml
=========

.. conda:recipe:: perl-yaml
   :replaces_section_title:
   :noindex:

   YAML Ain\'t Markup Language™

   :homepage: https://github.com/ingydotnet/yaml-pm
   :license: perl_5
   :recipe: /`perl-yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml/meta.yaml>`_

   


.. conda:package:: perl-yaml

   |downloads_perl-yaml| |docker_perl-yaml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30-0</code>,  <code>1.29-1</code>,  <code>1.29-0</code>,  <code>1.28-0</code>,  <code>1.27-0</code>,  <code>1.26-1</code>,  <code>1.26-0</code>,  <code>1.24-1</code>,  <code>1.24-0</code>,  </span></summary>
      

      ``1.30-0``,  ``1.29-1``,  ``1.29-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-1``,  ``1.26-0``,  ``1.24-1``,  ``1.24-0``,  ``1.18-2``,  ``1.18-1``,  ``1.18-0``,  ``1.15-1``,  ``1.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-yaml

   and update with::

      conda update perl-yaml

   or use the docker container::

      docker pull quay.io/biocontainers/perl-yaml:<tag>

   (see `perl-yaml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-yaml| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-yaml
   :alt:   (downloads)
.. |docker_perl-yaml| image:: https://quay.io/repository/biocontainers/perl-yaml/status
   :target: https://quay.io/repository/biocontainers/perl-yaml
.. _`perl-yaml/tags`: https://quay.io/repository/biocontainers/perl-yaml?tab=tags


.. raw:: html

    <script>
        var package = "perl-yaml";
        var versions = ["1.30","1.29","1.29","1.28","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml/README.html