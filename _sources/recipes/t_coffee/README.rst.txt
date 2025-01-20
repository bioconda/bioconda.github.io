:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't-coffee'
.. highlight: bash

t-coffee
========

.. conda:recipe:: t_coffee
   :replaces_section_title:
   :noindex:

   A collection of tools for Multiple Alignments of DNA\, RNA\, Protein Sequence

   :homepage: http://www.tcoffee.org/Projects/tcoffee/
   :license: GPL-2.0-only
   :recipe: /`t_coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.2000.4042`

   


.. conda:package:: t-coffee

   |downloads_t-coffee| |docker_t-coffee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>13.46.0.919e8c6b-3</code>,  <code>13.46.0.919e8c6b-2</code>,  <code>13.46.0.919e8c6b-1</code>,  <code>13.46.0.919e8c6b-0</code>,  <code>13.45.0.4846264-7</code>,  <code>13.45.0.4846264-6</code>,  <code>13.45.0.4846264-5</code>,  <code>13.45.0.4846264-4</code>,  <code>13.45.0.4846264-3</code>,  </span></summary>
      

      ``13.46.0.919e8c6b-3``,  ``13.46.0.919e8c6b-2``,  ``13.46.0.919e8c6b-1``,  ``13.46.0.919e8c6b-0``,  ``13.45.0.4846264-7``,  ``13.45.0.4846264-6``,  ``13.45.0.4846264-5``,  ``13.45.0.4846264-4``,  ``13.45.0.4846264-3``,  ``13.45.0.4846264-2``,  ``13.45.0.4846264-1``,  ``13.45.0.4846264-0``,  ``13.39.0.d675aed-2``,  ``13.39.0.d675aed-1``,  ``13.39.0.d675aed-0``,  ``12.00.7fb08c2-2``,  ``12.00.7fb08c2-1``,  ``12.00.7fb08c2-0``,  ``11.00.8cbe486-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends clustalo: 
   :depends clustalw: 
   :depends consan: 
   :depends dca: 
   :depends dialign-tx: ``>=1.0.2``
   :depends famsa: 
   :depends kalign2: 
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends mafft: 
   :depends muscle: 
   :depends mustang: ``>=3.2.3``
   :depends pasta: 
   :depends perl: 
   :depends phylip: 
   :depends poa: ``>=2.0``
   :depends prank: 
   :depends probcons: 
   :depends probconsrna: 
   :depends sap: 
   :depends tmalign: 
   :depends viennarna: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install t-coffee

   and update with::

      mamba update t-coffee

  To create a new environment, run::

      mamba create --name myenvname t-coffee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/t-coffee:<tag>

   (see `t-coffee/tags`_ for valid values for ``<tag>``)


.. |downloads_t-coffee| image:: https://img.shields.io/conda/dn/bioconda/t-coffee.svg?style=flat
   :target: https://anaconda.org/bioconda/t-coffee
   :alt:   (downloads)
.. |docker_t-coffee| image:: https://quay.io/repository/biocontainers/t-coffee/status
   :target: https://quay.io/repository/biocontainers/t-coffee
.. _`t-coffee/tags`: https://quay.io/repository/biocontainers/t-coffee?tab=tags


.. raw:: html

    <script>
        var package = "t-coffee";
        var versions = ["13.46.0.919e8c6b","13.46.0.919e8c6b","13.46.0.919e8c6b","13.46.0.919e8c6b","13.45.0.4846264"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t-coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t-coffee/README.html