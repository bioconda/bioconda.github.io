:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmodeler'
.. highlight: bash

repeatmodeler
=============

.. conda:recipe:: repeatmodeler
   :replaces_section_title:
   :noindex:

   RepeatModeler is a de\-novo repeat family identification and modeling package.

   :homepage: https://www.repeatmasker.org/RepeatModeler/
   :developer docs: https://github.com/Dfam-consortium/RepeatModeler
   :license: Open Software License v2.1
   :recipe: /`repeatmodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler/meta.yaml>`_
   :links: biotools: :biotools:`RepeatModeler`

   


.. conda:package:: repeatmodeler

   |downloads_repeatmodeler| |docker_repeatmodeler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2a-1</code>,  <code>2.0.2a-0</code>,  <code>2.0.1-0</code>,  <code>1.0.11-3</code>,  <code>1.0.11-2</code>,  <code>1.0.11-1</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2a-1``,  ``2.0.2a-0``,  ``2.0.1-0``,  ``1.0.11-3``,  ``1.0.11-2``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.8-1``,  ``1.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends cd-hit: ``>=4.8.1``
   :depends genometools-genometools: ``>=1.6``
   :depends ltr_retriever: ``>=2.9``
   :depends mafft: ``>=7.471``
   :depends ninja-nj: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-devel-size: 
   :depends perl-file-which: 
   :depends perl-libwww-perl: 
   :depends perl-uri: 
   :depends recon: ``>=1.08``
   :depends repeatmasker: ``>=4.1.5``
   :depends repeatscout: ``>=1.0.6``
   :depends rmblast: ``>=2.13.0``
   :depends trf: ``>=4.09``
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repeatmodeler

   and update with::

      conda update repeatmodeler

   or use the docker container::

      docker pull quay.io/biocontainers/repeatmodeler:<tag>

   (see `repeatmodeler/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatmodeler| image:: https://img.shields.io/conda/dn/bioconda/repeatmodeler.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatmodeler
   :alt:   (downloads)
.. |docker_repeatmodeler| image:: https://quay.io/repository/biocontainers/repeatmodeler/status
   :target: https://quay.io/repository/biocontainers/repeatmodeler
.. _`repeatmodeler/tags`: https://quay.io/repository/biocontainers/repeatmodeler?tab=tags


.. raw:: html

    <script>
        var package = "repeatmodeler";
        var versions = ["2.0.4","2.0.3","2.0.2a","2.0.2a","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmodeler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmodeler/README.html