:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-proteininference'
.. highlight: bash

proteomiqon-proteininference
============================

.. conda:recipe:: proteomiqon-proteininference
   :replaces_section_title:
   :noindex:

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. The process of \'Protein Inference\' is concerned with the mapping of identified peptides to the proteins they putatively originated from.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/ProteinInference.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-proteininference <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-proteininference>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-proteininference/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. The process of \'Protein Inference\' is concerned with the mapping of identified peptides to
   the proteins they putatively originated from. This process is not as straightforward as one might think at a first glance on the subject\, since the peptide\-to\-protein mapping
   is not necessarily a one\-to\-one relationship but in many cases a one\-to\-many relationship. This is due to the fact that many proteins share peptides with an identical sequence\,
   e.g. two proteins originating from two different splice variants of the same gene. The ProteinInference tool relies on the concepts of protein groups and peptide evidence
   classes.



.. conda:package:: proteomiqon-proteininference

   |downloads_proteomiqon-proteininference| |docker_proteomiqon-proteininference|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends dotnet-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-proteininference

   and update with::

      conda update proteomiqon-proteininference

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-proteininference:<tag>

   (see `proteomiqon-proteininference/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-proteininference| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-proteininference.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-proteininference
   :alt:   (downloads)
.. |docker_proteomiqon-proteininference| image:: https://quay.io/repository/biocontainers/proteomiqon-proteininference/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-proteininference
.. _`proteomiqon-proteininference/tags`: https://quay.io/repository/biocontainers/proteomiqon-proteininference?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html