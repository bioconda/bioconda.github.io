:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakesv'
.. highlight: bash

snakesv
=======

.. conda:recipe:: snakesv
   :replaces_section_title:
   :noindex:

   snakeSV\: Flexible framework for large\-scale SV discovery

   :homepage: https://github.com/RajLabMSSM/snakeSV/
   :license: MIT / MIT
   :recipe: /`snakesv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesv/meta.yaml>`_

   


.. conda:package:: snakesv

   |downloads_snakesv| |docker_snakesv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-3</code>,  <code>0.7-2</code>,  <code>0.7-1</code>,  <code>0.7-0</code>,  <code>0.6-0</code>,  <code>0.4-1</code>,  <code>0.4-0</code>,  </span></summary>
      

      ``0.8-1``,  ``0.8-0``,  ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.4-1``,  ``0.4-0``,  ``0.3.1-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``1.9.*``
   :depends mamba: ``1.4.2.*``
   :depends python: ``3.11.6.*``
   :depends snakemake: ``7.32.4.*``
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

      mamba install snakesv

   and update with::

      mamba update snakesv

  To create a new environment, run::

      mamba create --name myenvname snakesv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakesv:<tag>

   (see `snakesv/tags`_ for valid values for ``<tag>``)


.. |downloads_snakesv| image:: https://img.shields.io/conda/dn/bioconda/snakesv.svg?style=flat
   :target: https://anaconda.org/bioconda/snakesv
   :alt:   (downloads)
.. |docker_snakesv| image:: https://quay.io/repository/biocontainers/snakesv/status
   :target: https://quay.io/repository/biocontainers/snakesv
.. _`snakesv/tags`: https://quay.io/repository/biocontainers/snakesv?tab=tags


.. raw:: html

    <script>
        var package = "snakesv";
        var versions = ["0.8","0.8","0.7","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakesv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakesv/README.html