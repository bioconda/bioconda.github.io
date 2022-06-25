:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json'
.. highlight: bash

perl-json
=========

.. conda:recipe:: perl-json
   :replaces_section_title:
   :noindex:

   JSON \(JavaScript Object Notation\) encoder\/decoder

   :homepage: http://metacpan.org/pod/JSON
   :license: perl_5
   :recipe: /`perl-json <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json/meta.yaml>`_

   


.. conda:package:: perl-json

   |downloads_perl-json| |docker_perl-json|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.07-0</code>,  <code>4.06-0</code>,  <code>4.05-0</code>,  <code>4.02-1</code>,  <code>4.02-0</code>,  <code>4.00-0</code>,  <code>2.97001-0</code>,  <code>2.90-3</code>,  <code>2.90-2</code>,  </span></summary>
      

      ``4.07-0``,  ``4.06-0``,  ``4.05-0``,  ``4.02-1``,  ``4.02-0``,  ``4.00-0``,  ``2.97001-0``,  ``2.90-3``,  ``2.90-2``,  ``2.90-1``,  ``2.90-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-json-xs: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json

   and update with::

      conda update perl-json

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json:<tag>

   (see `perl-json/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json| image:: https://img.shields.io/conda/dn/bioconda/perl-json.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json
   :alt:   (downloads)
.. |docker_perl-json| image:: https://quay.io/repository/biocontainers/perl-json/status
   :target: https://quay.io/repository/biocontainers/perl-json
.. _`perl-json/tags`: https://quay.io/repository/biocontainers/perl-json?tab=tags


.. raw:: html

    <script>
        var package = "perl-json";
        var versions = ["4.07","4.06","4.05","4.02","4.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json/README.html