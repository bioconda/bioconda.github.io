:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falcon'
.. highlight: bash

pb-falcon
=========

.. conda:recipe:: pb-falcon
   :replaces_section_title:
   :noindex:

   FALCON\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon/meta.yaml>`_

   


.. conda:package:: pb-falcon

   |downloads_pb-falcon| |docker_pb-falcon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.4-4</code>,  <code>2.2.4-3</code>,  <code>2.2.4-2</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-1</code>,  </span></summary>
      

      ``2.2.4-4``,  ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.6-3``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: ``>=0.16.0``
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends networkx: ``>=1.9.1``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-edlib: ``>=1.2.4``
   :depends python-intervaltree: 
   :depends python-msgpack: ``>=0.6.1``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pb-falcon

   and update with::

      mamba update pb-falcon

  To create a new environment, run::

      mamba create --name myenvname pb-falcon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-falcon:<tag>

   (see `pb-falcon/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-falcon| image:: https://img.shields.io/conda/dn/bioconda/pb-falcon.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falcon
   :alt:   (downloads)
.. |docker_pb-falcon| image:: https://quay.io/repository/biocontainers/pb-falcon/status
   :target: https://quay.io/repository/biocontainers/pb-falcon
.. _`pb-falcon/tags`: https://quay.io/repository/biocontainers/pb-falcon?tab=tags


.. raw:: html

    <script>
        var package = "pb-falcon";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.4","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falcon/README.html