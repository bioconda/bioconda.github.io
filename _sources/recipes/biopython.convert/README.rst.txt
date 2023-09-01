:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopython.convert'
.. highlight: bash

biopython.convert
=================

.. conda:recipe:: biopython.convert
   :replaces_section_title:
   :noindex:

   Interconvert various file formats supported by BioPython

   :homepage: https://github.com/brinkmanlab/BioPython-Convert
   :license: MIT / MIT
   :recipe: /`biopython.convert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert/meta.yaml>`_

   


.. conda:package:: biopython.convert

   |downloads_biopython.convert| |docker_biopython.convert|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends gffutils: ``>=0.9``
   :depends jmespath: ``>=0.9.4``
   :depends pbr: 
   :depends python: 
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

      mamba install biopython.convert

   and update with::

      mamba update biopython.convert

  To create a new environment, run::

      mamba create --name myenvname biopython.convert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopython.convert:<tag>

   (see `biopython.convert/tags`_ for valid values for ``<tag>``)


.. |downloads_biopython.convert| image:: https://img.shields.io/conda/dn/bioconda/biopython.convert.svg?style=flat
   :target: https://anaconda.org/bioconda/biopython.convert
   :alt:   (downloads)
.. |docker_biopython.convert| image:: https://quay.io/repository/biocontainers/biopython.convert/status
   :target: https://quay.io/repository/biocontainers/biopython.convert
.. _`biopython.convert/tags`: https://quay.io/repository/biocontainers/biopython.convert?tab=tags


.. raw:: html

    <script>
        var package = "biopython.convert";
        var versions = ["1.3.3","1.3.2","1.3.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopython.convert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopython.convert/README.html