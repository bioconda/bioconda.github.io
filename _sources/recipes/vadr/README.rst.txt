:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vadr'
.. highlight: bash

vadr
====

.. conda:recipe:: vadr
   :replaces_section_title:
   :noindex:

   Viral Annotation DefineR \- classification and annotation of viral sequences based on RefSeq annotation

   :homepage: https://github.com/ncbi/vadr
   :license: Public Domain
   :recipe: /`vadr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr/meta.yaml>`_

   


.. conda:package:: vadr

   |downloads_vadr| |docker_vadr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5-1</code>,  <code>1.5-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  </span></summary>
      

      ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5-1``,  ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.11.0``
   :depends easel: ``>=0.48``
   :depends hmmer: ``>=3.3.2``
   :depends infernal: ``>=1.1.4``
   :depends libgcc-ng: ``>=12``
   :depends minimap2: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-easel: ``>=0.16``
   :depends perl-lwp-protocol-https: ``>=6.07``
   :depends perl-lwp-simple: 
   :depends perl-net-ssleay: ``>=1.88``
   :depends sequip: ``>=0.08``
   :depends wget: 
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

      mamba install vadr

   and update with::

      mamba update vadr

  To create a new environment, run::

      mamba create --name myenvname vadr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vadr:<tag>

   (see `vadr/tags`_ for valid values for ``<tag>``)


.. |downloads_vadr| image:: https://img.shields.io/conda/dn/bioconda/vadr.svg?style=flat
   :target: https://anaconda.org/bioconda/vadr
   :alt:   (downloads)
.. |docker_vadr| image:: https://quay.io/repository/biocontainers/vadr/status
   :target: https://quay.io/repository/biocontainers/vadr
.. _`vadr/tags`: https://quay.io/repository/biocontainers/vadr?tab=tags


.. raw:: html

    <script>
        var package = "vadr";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vadr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vadr/README.html