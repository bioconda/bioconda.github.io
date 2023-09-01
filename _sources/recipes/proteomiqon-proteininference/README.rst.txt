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
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install proteomiqon-proteininference

   and update with::

      mamba update proteomiqon-proteininference

  To create a new environment, run::

      mamba create --name myenvname proteomiqon-proteininference

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-proteininference:<tag>

   (see `proteomiqon-proteininference/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-proteininference| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-proteininference.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-proteininference
   :alt:   (downloads)
.. |docker_proteomiqon-proteininference| image:: https://quay.io/repository/biocontainers/proteomiqon-proteininference/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-proteininference
.. _`proteomiqon-proteininference/tags`: https://quay.io/repository/biocontainers/proteomiqon-proteininference?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-proteininference";
        var versions = ["0.0.7","0.0.7","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html