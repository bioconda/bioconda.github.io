:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jaffa'
.. highlight: bash

jaffa
=====

.. conda:recipe:: jaffa
   :replaces_section_title:
   :noindex:

   JAFFA is a multi\-step pipeline that takes either raw RNA\-Seq reads\, or pre\-assembled transcripts then searches
   for gene fusions.  This package contains the wrappers jaffa\-direct\, jaffa\-assembly\, and jaffa\-hybrid.
   You can pass the \"refSeq\" parameter in the environment variables JAFFA\_REF\_BASE. Otherwise\, pass any paramters
   to the wrappers as you would to the bpipe JAFFA\_\{method\} call in the manual.


   :homepage: https://github.com/Oshlack/JAFFA
   :license: GPL-3.0-or-later
   :recipe: /`jaffa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa/meta.yaml>`_

   


.. conda:package:: jaffa

   |downloads_jaffa| |docker_jaffa|

   :versions:
      
      

      ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.00-1``,  ``2.00-0``,  ``1.09-2``,  ``1.09-1``,  ``1.09-0``,  ``1.08-0``

      

   
   :depends bbmap: 
   :depends bioconductor-iranges: 
   :depends blat: 
   :depends bowtie2: 
   :depends bpipe: 
   :depends fastx_toolkit: 
   :depends oases: 
   :depends samtools: ``1.1``
   :depends trimmomatic: 
   :depends velvet: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jaffa

   and update with::

      mamba update jaffa

  To create a new environment, run::

      mamba create --name myenvname jaffa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jaffa:<tag>

   (see `jaffa/tags`_ for valid values for ``<tag>``)


.. |downloads_jaffa| image:: https://img.shields.io/conda/dn/bioconda/jaffa.svg?style=flat
   :target: https://anaconda.org/bioconda/jaffa
   :alt:   (downloads)
.. |docker_jaffa| image:: https://quay.io/repository/biocontainers/jaffa/status
   :target: https://quay.io/repository/biocontainers/jaffa
.. _`jaffa/tags`: https://quay.io/repository/biocontainers/jaffa?tab=tags


.. raw:: html

    <script>
        var package = "jaffa";
        var versions = ["2.3","2.2","2.1","2.00","2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaffa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaffa/README.html