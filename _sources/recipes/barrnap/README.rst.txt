:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barrnap'
.. highlight: bash

barrnap
=======

.. conda:recipe:: barrnap
   :replaces_section_title:
   :noindex:

   Barrnap predicts the location of ribosomal RNA genes in genomes. \(bacteria\, archaea\, metazoan mitochondria and eukaryotes.\)

   :homepage: https://github.com/tseemann/barrnap
   :license: GPLv3
   :recipe: /`barrnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap/meta.yaml>`_
   :links: biotools: :biotools:`barrnap`

   


.. conda:package:: barrnap

   |downloads_barrnap| |docker_barrnap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-4</code>,  <code>0.9-3</code>,  <code>0.9-2</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-4</code>,  <code>0.7-3</code>,  </span></summary>
      

      ``0.9-4``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-4``,  ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends hmmer: ``>=3.1b``
   :depends perl: 
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

      mamba install barrnap

   and update with::

      mamba update barrnap

  To create a new environment, run::

      mamba create --name myenvname barrnap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barrnap:<tag>

   (see `barrnap/tags`_ for valid values for ``<tag>``)


.. |downloads_barrnap| image:: https://img.shields.io/conda/dn/bioconda/barrnap.svg?style=flat
   :target: https://anaconda.org/bioconda/barrnap
   :alt:   (downloads)
.. |docker_barrnap| image:: https://quay.io/repository/biocontainers/barrnap/status
   :target: https://quay.io/repository/biocontainers/barrnap
.. _`barrnap/tags`: https://quay.io/repository/biocontainers/barrnap?tab=tags


.. raw:: html

    <script>
        var package = "barrnap";
        var versions = ["0.9","0.9","0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barrnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barrnap/README.html