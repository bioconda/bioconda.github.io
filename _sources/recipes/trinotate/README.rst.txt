:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinotate'
.. highlight: bash

trinotate
=========

.. conda:recipe:: trinotate
   :replaces_section_title:
   :noindex:

   Trinotate is a comprehensive annotation suite designed for automatic functional annotation of transcriptomes\, particularly de novo assembled transcriptomes\, from model or non\-model organisms

   :homepage: https://trinotate.github.io/
   :license: BSD
   :recipe: /`trinotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate/meta.yaml>`_

   


.. conda:package:: trinotate

   |downloads_trinotate| |docker_trinotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.1-7</code>,  <code>3.1.1-6</code>,  <code>3.1.1-5</code>,  </span></summary>
      

      ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.1-7``,  ``3.1.1-6``,  ``3.1.1-5``,  ``3.1.1-4``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends hmmer: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-file-find-rule: 
   :depends perl-module-build: 
   :depends sqlite: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trinotate

   and update with::

      conda update trinotate

   or use the docker container::

      docker pull quay.io/biocontainers/trinotate:<tag>

   (see `trinotate/tags`_ for valid values for ``<tag>``)


.. |downloads_trinotate| image:: https://img.shields.io/conda/dn/bioconda/trinotate.svg?style=flat
   :target: https://anaconda.org/bioconda/trinotate
   :alt:   (downloads)
.. |docker_trinotate| image:: https://quay.io/repository/biocontainers/trinotate/status
   :target: https://quay.io/repository/biocontainers/trinotate
.. _`trinotate/tags`: https://quay.io/repository/biocontainers/trinotate?tab=tags


.. raw:: html

    <script>
        var package = "trinotate";
        var versions = ["3.2.2","3.2.2","3.2.1","3.2.1","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinotate/README.html