:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-uuid'
.. highlight: bash

perl-data-uuid
==============

.. conda:recipe:: perl-data-uuid
   :replaces_section_title:
   :noindex:

   Globally\/Universally Unique Identifiers \(GUIDs\/UUIDs\)

   :homepage: http://metacpan.org/pod/Data::UUID
   :license: bsd
   :recipe: /`perl-data-uuid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid/meta.yaml>`_

   


.. conda:package:: perl-data-uuid

   |downloads_perl-data-uuid| |docker_perl-data-uuid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.226-3</code>,  <code>1.226-2</code>,  <code>1.226-1</code>,  <code>1.226-0</code>,  <code>1.224-1</code>,  <code>1.224-0</code>,  <code>1.221-5</code>,  <code>1.221-4</code>,  <code>1.221-3</code>,  </span></summary>
      

      ``1.226-3``,  ``1.226-2``,  ``1.226-1``,  ``1.226-0``,  ``1.224-1``,  ``1.224-0``,  ``1.221-5``,  ``1.221-4``,  ``1.221-3``,  ``1.221-2``,  ``1.221-1``,  ``1.221-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-digest-md5: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-uuid

   and update with::

      conda update perl-data-uuid

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-uuid:<tag>

   (see `perl-data-uuid/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-uuid| image:: https://img.shields.io/conda/dn/bioconda/perl-data-uuid.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-uuid
   :alt:   (downloads)
.. |docker_perl-data-uuid| image:: https://quay.io/repository/biocontainers/perl-data-uuid/status
   :target: https://quay.io/repository/biocontainers/perl-data-uuid
.. _`perl-data-uuid/tags`: https://quay.io/repository/biocontainers/perl-data-uuid?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-uuid";
        var versions = ["1.226","1.226","1.226","1.226","1.224"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-uuid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-uuid/README.html