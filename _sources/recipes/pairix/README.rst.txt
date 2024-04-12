:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairix'
.. highlight: bash

pairix
======

.. conda:recipe:: pairix
   :replaces_section_title:
   :noindex:

   2D indexing on bgzipped text files of paired genomic coordinates

   :homepage: https://github.com/4dn-dcic/pairix
   :license: MIT / MIT
   :recipe: /`pairix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairix/meta.yaml>`_

   


.. conda:package:: pairix

   |downloads_pairix| |docker_pairix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.8-0</code>,  <code>0.3.7-5</code>,  <code>0.3.7-4</code>,  <code>0.3.7-3</code>,  <code>0.3.7-2</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-4</code>,  <code>0.3.6-2</code>,  </span></summary>
      

      ``0.3.8-0``,  ``0.3.7-5``,  ``0.3.7-4``,  ``0.3.7-3``,  ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-4``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
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

      mamba install pairix

   and update with::

      mamba update pairix

  To create a new environment, run::

      mamba create --name myenvname pairix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pairix:<tag>

   (see `pairix/tags`_ for valid values for ``<tag>``)


.. |downloads_pairix| image:: https://img.shields.io/conda/dn/bioconda/pairix.svg?style=flat
   :target: https://anaconda.org/bioconda/pairix
   :alt:   (downloads)
.. |docker_pairix| image:: https://quay.io/repository/biocontainers/pairix/status
   :target: https://quay.io/repository/biocontainers/pairix
.. _`pairix/tags`: https://quay.io/repository/biocontainers/pairix?tab=tags


.. raw:: html

    <script>
        var package = "pairix";
        var versions = ["0.3.8","0.3.7","0.3.7","0.3.7","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairix/README.html