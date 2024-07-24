:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'entrez-direct'
.. highlight: bash

entrez-direct
=============

.. conda:recipe:: entrez-direct
   :replaces_section_title:
   :noindex:

   Entrez Direct \(EDirect\) is an advanced method for accessing the NCBI\'s set of interconnected databases \(publication\, sequence\, structure\, gene\, variation\, expression\, etc.\) from a UNIX terminal window. Functions take search terms from command\-line arguments. Individual operations are combined to build multi\-step queries. Record retrieval and formatting normally complete the process.

   :homepage: https://ftp.ncbi.nlm.nih.gov/entrez/entrezdirect/versions/22.4.20240717/README
   :license: PUBLIC DOMAIN
   :recipe: /`entrez-direct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct/meta.yaml>`_

   


.. conda:package:: entrez-direct

   |downloads_entrez-direct| |docker_entrez-direct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>22.4-0</code>,  <code>22.1-0</code>,  <code>21.6-0</code>,  <code>16.2-1</code>,  <code>16.2-0</code>,  <code>15.6-1</code>,  <code>15.6-0</code>,  <code>13.9-2</code>,  <code>13.9-1</code>,  </span></summary>
      

      ``22.4-0``,  ``22.1-0``,  ``21.6-0``,  ``16.2-1``,  ``16.2-0``,  ``15.6-1``,  ``15.6-0``,  ``13.9-2``,  ``13.9-1``,  ``13.9-0``,  ``13.8-0``,  ``13.3-0``,  ``11.0-2``,  ``11.0-1``,  ``11.0-0``,  ``10.2-0``,  ``10.0-0``,  ``7.70-2``,  ``7.70-1``,  ``7.70-0``,  ``7.00-1``,  ``7.00-0``,  ``5.80-0``,  ``4.00-1``,  ``4.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends wget: 
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

      mamba install entrez-direct

   and update with::

      mamba update entrez-direct

  To create a new environment, run::

      mamba create --name myenvname entrez-direct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/entrez-direct:<tag>

   (see `entrez-direct/tags`_ for valid values for ``<tag>``)


.. |downloads_entrez-direct| image:: https://img.shields.io/conda/dn/bioconda/entrez-direct.svg?style=flat
   :target: https://anaconda.org/bioconda/entrez-direct
   :alt:   (downloads)
.. |docker_entrez-direct| image:: https://quay.io/repository/biocontainers/entrez-direct/status
   :target: https://quay.io/repository/biocontainers/entrez-direct
.. _`entrez-direct/tags`: https://quay.io/repository/biocontainers/entrez-direct?tab=tags


.. raw:: html

    <script>
        var package = "entrez-direct";
        var versions = ["22.4","22.1","21.6","16.2","16.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/entrez-direct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/entrez-direct/README.html