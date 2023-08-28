:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hic2cool'
.. highlight: bash

hic2cool
========

.. conda:recipe:: hic2cool
   :replaces_section_title:
   :noindex:

   A converter between .hic files \(from juicer\) and .cool files \(for cooler\).

   :homepage: https://github.com/4dn-dcic/hic2cool
   :license: MIT / MIT
   :recipe: /`hic2cool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic2cool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic2cool/meta.yaml>`_

   


.. conda:package:: hic2cool

   |downloads_hic2cool| |docker_hic2cool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-2</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.0-0</code>,  <code>0.7.3-0</code>,  <code>0.7.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cooler: ``>=0.8.5``
   :depends h5py: ``>=2.8.0``
   :depends numpy: ``>=1.10.1``
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hic2cool

   and update with::

      mamba update hic2cool

  To create a new environment, run::

      mamba create --name myenvname hic2cool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hic2cool:<tag>

   (see `hic2cool/tags`_ for valid values for ``<tag>``)


.. |downloads_hic2cool| image:: https://img.shields.io/conda/dn/bioconda/hic2cool.svg?style=flat
   :target: https://anaconda.org/bioconda/hic2cool
   :alt:   (downloads)
.. |docker_hic2cool| image:: https://quay.io/repository/biocontainers/hic2cool/status
   :target: https://quay.io/repository/biocontainers/hic2cool
.. _`hic2cool/tags`: https://quay.io/repository/biocontainers/hic2cool?tab=tags


.. raw:: html

    <script>
        var package = "hic2cool";
        var versions = ["0.8.3","0.8.3","0.8.3","0.8.2","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hic2cool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hic2cool/README.html