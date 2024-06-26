:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idr'
.. highlight: bash

idr
===

.. conda:recipe:: idr
   :replaces_section_title:
   :noindex:

   The IDR \(Irreproducible Discovery Rate\) framework is a uniﬁed approach to measure the reproducibility of ﬁndings identiﬁed from replicate experiments and provide highly stable thresholds based on reproducibility.

   :homepage: https://github.com/kundajelab/idr
   :license: GPL / GPLv2
   :recipe: /`idr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr/meta.yaml>`_
   :links: doi: :doi:`10.1214/11-AOAS466`

   


.. conda:package:: idr

   |downloads_idr| |docker_idr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4.2-12</code>,  <code>2.0.4.2-11</code>,  <code>2.0.4.2-10</code>,  <code>2.0.4.2-9</code>,  <code>2.0.4.2-8</code>,  <code>2.0.4.2-7</code>,  <code>2.0.4.2-6</code>,  <code>2.0.4.2-5</code>,  <code>2.0.4.2-4</code>,  </span></summary>
      

      ``2.0.4.2-12``,  ``2.0.4.2-11``,  ``2.0.4.2-10``,  ``2.0.4.2-9``,  ``2.0.4.2-8``,  ``2.0.4.2-7``,  ``2.0.4.2-6``,  ``2.0.4.2-5``,  ``2.0.4.2-4``,  ``2.0.4.2-3``,  ``2.0.4.2-2``,  ``2.0.4.2-1``,  ``2.0.4.2-0``,  ``2.0.3-5``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-0``,  ``2.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: ``<1.20``
   :depends numpy: ``>=1.19.5,<2.0a0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends scipy: ``<1.10``
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

      mamba install idr

   and update with::

      mamba update idr

  To create a new environment, run::

      mamba create --name myenvname idr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idr:<tag>

   (see `idr/tags`_ for valid values for ``<tag>``)


.. |downloads_idr| image:: https://img.shields.io/conda/dn/bioconda/idr.svg?style=flat
   :target: https://anaconda.org/bioconda/idr
   :alt:   (downloads)
.. |docker_idr| image:: https://quay.io/repository/biocontainers/idr/status
   :target: https://quay.io/repository/biocontainers/idr
.. _`idr/tags`: https://quay.io/repository/biocontainers/idr?tab=tags


.. raw:: html

    <script>
        var package = "idr";
        var versions = ["2.0.4.2","2.0.4.2","2.0.4.2","2.0.4.2","2.0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idr/README.html