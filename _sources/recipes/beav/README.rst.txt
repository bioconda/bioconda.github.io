:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beav'
.. highlight: bash

beav
====

.. conda:recipe:: beav
   :replaces_section_title:
   :noindex:

   beav\: Bacterial genome and mobile element annotation pipeline

   :homepage: https://github.com/weisberglab/beav
   :license: GPL / GPL-3.0
   :recipe: /`beav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav/meta.yaml>`_

   


.. conda:package:: beav

   |downloads_beav| |docker_beav|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.5-1</code>,  <code>0.5.5-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.4.5-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.5-0``,  ``0.2-0``,  ``0.0.14-0``,  ``0.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends antismash-lite: 
   :depends bakta: ``>=1.6``
   :depends bbmap: 
   :depends bedtools: ``>=2.27.1``
   :depends biopython: ``>=1.78,<=1.79``
   :depends blast: ``>=2.6.0``
   :depends blast-legacy: 
   :depends defense-finder: 
   :depends emboss: 
   :depends fastani: 
   :depends gzip: 
   :depends hmmer: ``>=3.3.2``
   :depends infernal: ``>=1.1.2``
   :depends integron_finder: ``2.0.2.*``
   :depends macsyfinder: 
   :depends numpy: ``>=1.19.4,<=1.22.1``
   :depends pandas: ``>=1.1.5,<=1.4.0``
   :depends perl: ``>=5.22.0``
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-ipc-run3: 
   :depends pftools: 
   :depends prokka: ``>=1.11``
   :depends python: ``>=3.7,<=3.10``
   :depends scikit-learn: 
   :depends tqdm: 
   :depends trnascan-se: ``>=2.0.2``
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

      mamba install beav

   and update with::

      mamba update beav

  To create a new environment, run::

      mamba create --name myenvname beav

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beav:<tag>

   (see `beav/tags`_ for valid values for ``<tag>``)


.. |downloads_beav| image:: https://img.shields.io/conda/dn/bioconda/beav.svg?style=flat
   :target: https://anaconda.org/bioconda/beav
   :alt:   (downloads)
.. |docker_beav| image:: https://quay.io/repository/biocontainers/beav/status
   :target: https://quay.io/repository/biocontainers/beav
.. _`beav/tags`: https://quay.io/repository/biocontainers/beav?tab=tags


.. raw:: html

    <script>
        var package = "beav";
        var versions = ["1.4.0","1.3.0","1.1.0","1.0.0","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beav/README.html