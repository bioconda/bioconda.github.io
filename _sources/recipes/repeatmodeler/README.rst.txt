:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmodeler'
.. highlight: bash

repeatmodeler
=============

.. conda:recipe:: repeatmodeler
   :replaces_section_title:
   :noindex:

   RepeatModeler is a de\-novo repeat family identification and modeling package.

   :homepage: https://www.repeatmasker.org/RepeatModeler
   :developer docs: https://github.com/Dfam-consortium/RepeatModeler
   :license: Open Software License v2.1
   :recipe: /`repeatmodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler/meta.yaml>`_
   :links: biotools: :biotools:`RepeatModeler`, usegalaxy-eu: :usegalaxy-eu:`repeatmodeler`

   


.. conda:package:: repeatmodeler

   |downloads_repeatmodeler| |docker_repeatmodeler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2a-1</code>,  <code>2.0.2a-0</code>,  <code>2.0.1-0</code>,  <code>1.0.11-3</code>,  <code>1.0.11-2</code>,  </span></summary>
      

      ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2a-1``,  ``2.0.2a-0``,  ``2.0.1-0``,  ``1.0.11-3``,  ``1.0.11-2``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.8-1``,  ``1.0.8-0``

      
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
   :depends rmblast: ``>=2.14.1``
   :depends trf: ``>=4.09``
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install repeatmodeler

   and update with::

      mamba update repeatmodeler

  To create a new environment, run::

      mamba create --name myenvname repeatmodeler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["2.0.6","2.0.5","2.0.4","2.0.3","2.0.2a"];
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