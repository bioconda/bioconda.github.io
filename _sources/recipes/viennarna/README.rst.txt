:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viennarna'
.. highlight: bash

viennarna
=========

.. conda:recipe:: viennarna
   :replaces_section_title:
   :noindex:

   ViennaRNA package \-\- RNA secondary structure prediction and comparison

   :homepage: http://www.tbi.univie.ac.at/RNA/
   :license: custom
   :recipe: /`viennarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viennarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viennarna/meta.yaml>`_

   


.. conda:package:: viennarna

   |downloads_viennarna| |docker_viennarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-0</code>,  <code>2.6.4-3</code>,  <code>2.6.4-2</code>,  <code>2.6.4-1</code>,  <code>2.6.4-0</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  </span></summary>
      

      ``2.7.0-0``,  ``2.6.4-3``,  ``2.6.4-2``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.18-0``,  ``2.4.17-1``,  ``2.4.17-0``,  ``2.4.15-0``,  ``2.4.14-3``,  ``2.4.14-2``,  ``2.4.14-1``,  ``2.4.14-0``,  ``2.4.13-2``,  ``2.4.11-2``,  ``2.4.11-1``,  ``2.4.11-0``,  ``2.4.9-0``,  ``2.4.8-2``,  ``2.4.8-1``,  ``2.4.8-0``,  ``2.4.7-5``,  ``2.4.7-4``,  ``2.4.7-3``,  ``2.4.7-2``,  ``2.4.6-1``,  ``2.4.6-0``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.4-3``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-0``,  ``2.4.2-3``,  ``2.4.2-1``,  ``2.4.1-3``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.5-2``,  ``2.3.5-0``,  ``2.3.3-2``,  ``2.3.3-0``,  ``2.3.2-2``,  ``2.3.2-0``,  ``2.3.1-3``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-3``,  ``2.3.0-1``,  ``2.2.10-3``,  ``2.2.10-1``,  ``2.2.10-0``,  ``2.2.9-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-0``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.5-0``,  ``1.8.5-1``,  ``1.8.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mpfr: ``>=4.2.1,<5.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
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

      mamba install viennarna

   and update with::

      mamba update viennarna

  To create a new environment, run::

      mamba create --name myenvname viennarna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viennarna:<tag>

   (see `viennarna/tags`_ for valid values for ``<tag>``)


.. |downloads_viennarna| image:: https://img.shields.io/conda/dn/bioconda/viennarna.svg?style=flat
   :target: https://anaconda.org/bioconda/viennarna
   :alt:   (downloads)
.. |docker_viennarna| image:: https://quay.io/repository/biocontainers/viennarna/status
   :target: https://quay.io/repository/biocontainers/viennarna
.. _`viennarna/tags`: https://quay.io/repository/biocontainers/viennarna?tab=tags


.. raw:: html

    <script>
        var package = "viennarna";
        var versions = ["2.7.0","2.6.4","2.6.4","2.6.4","2.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viennarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viennarna/README.html