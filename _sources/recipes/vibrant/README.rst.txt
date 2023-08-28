:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vibrant'
.. highlight: bash

vibrant
=======

.. conda:recipe:: vibrant
   :replaces_section_title:
   :noindex:

   Virus Identification By iteRative ANnoTation

   :homepage: https://github.com/AnantharamanLab/VIBRANT
   :license: GPL / GPL-3.0
   :recipe: /`vibrant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant/meta.yaml>`_
   :links: doi: :doi:`10.1101/855387`

   


.. conda:package:: vibrant

   |downloads_vibrant| |docker_vibrant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-4</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends coreutils: 
   :depends gzip: 
   :depends hmmer: ``>=3.2.1``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``<1``
   :depends prodigal: 
   :depends python: ``>=3.5``
   :depends scikit-learn: ``0.21.3.*``
   :depends seaborn: 
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

      mamba install vibrant

   and update with::

      mamba update vibrant

  To create a new environment, run::

      mamba create --name myenvname vibrant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vibrant:<tag>

   (see `vibrant/tags`_ for valid values for ``<tag>``)


.. |downloads_vibrant| image:: https://img.shields.io/conda/dn/bioconda/vibrant.svg?style=flat
   :target: https://anaconda.org/bioconda/vibrant
   :alt:   (downloads)
.. |docker_vibrant| image:: https://quay.io/repository/biocontainers/vibrant/status
   :target: https://quay.io/repository/biocontainers/vibrant
.. _`vibrant/tags`: https://quay.io/repository/biocontainers/vibrant?tab=tags


.. raw:: html

    <script>
        var package = "vibrant";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>





Notes
-----
Read post\-link.sh on how to download 11GB required data files.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vibrant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vibrant/README.html