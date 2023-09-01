:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transit'
.. highlight: bash

transit
=======

.. conda:recipe:: transit
   :replaces_section_title:
   :noindex:

   TRANSIT

   :homepage: http://github.com/mad-lab/transit
   :developer docs: https://github.com/simongog/sdsl-lite
   :license: GPL / GPL-3
   :recipe: /`transit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit/meta.yaml>`_

   TRANSIT is a software that can be used to analyze Tn\-Seq datasets.
   It includes various statistical calculations of essentiality of
   genes or genomic regions \(including conditional essentiality
   between 2 conditions\).



.. conda:package:: transit

   |downloads_transit| |docker_transit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-0</code>,  <code>3.2.2-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>2.5.2-0</code>,  </span></summary>
      

      ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.5.2-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3,<3.1``
   :depends numpy: ``>=1.16,<1.17``
   :depends pillow: ``>=6,<6.1``
   :depends python: ``>=3.6``
   :depends scipy: ``>=1.2,<1.3``
   :depends statsmodels: ``>=0.9,<0.10``
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

      mamba install transit

   and update with::

      mamba update transit

  To create a new environment, run::

      mamba create --name myenvname transit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transit:<tag>

   (see `transit/tags`_ for valid values for ``<tag>``)


.. |downloads_transit| image:: https://img.shields.io/conda/dn/bioconda/transit.svg?style=flat
   :target: https://anaconda.org/bioconda/transit
   :alt:   (downloads)
.. |docker_transit| image:: https://quay.io/repository/biocontainers/transit/status
   :target: https://quay.io/repository/biocontainers/transit
.. _`transit/tags`: https://quay.io/repository/biocontainers/transit?tab=tags


.. raw:: html

    <script>
        var package = "transit";
        var versions = ["3.2.3","3.2.2","3.2.1","3.2.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transit/README.html