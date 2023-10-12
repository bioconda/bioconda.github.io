:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'influx_si'
.. highlight: bash

influx_si
=========

.. conda:recipe:: influx_si
   :replaces_section_title:
   :noindex:

   Metabolic flux and concentration estimation based on stable isotope labeling

   :homepage: https://metasys.insa-toulouse.fr/software/influx/
   :documentation: https://metasys.insa-toulouse.fr/software/influx/doc/
   
   :developer docs: https://github.com/sgsokol/influx/
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`influx_si <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si/meta.yaml>`_

   To install this package from bioconda run\:
   \`conda install \-c conda\-forge \-c bioconda influx\_si\`



.. conda:package:: influx_si

   |downloads_influx_si| |docker_influx_si|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.0.1-0</code>,  <code>7.0-0</code>,  <code>6.1-0</code>,  <code>6.0.4-1</code>,  <code>6.0.4-0</code>,  <code>6.0.1-0</code>,  <code>6.0-0</code>,  <code>5.4.0-0</code>,  <code>5.3.0-0</code>,  </span></summary>
      

      ``7.0.1-0``,  ``7.0-0``,  ``6.1-0``,  ``6.0.4-1``,  ``6.0.4-0``,  ``6.0.1-0``,  ``6.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends kvh: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends python-libsbml: 
   :depends r-arrapply: 
   :depends r-base: 
   :depends r-kvh: 
   :depends r-limsolve: 
   :depends r-multbxxc: 
   :depends r-nlsic: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcpparmadillo: 
   :depends r-rmumps: ``>=5.2.1_12``
   :depends r-slam: 
   :depends scipy: 
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

      mamba install influx_si

   and update with::

      mamba update influx_si

  To create a new environment, run::

      mamba create --name myenvname influx_si

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/influx_si:<tag>

   (see `influx_si/tags`_ for valid values for ``<tag>``)


.. |downloads_influx_si| image:: https://img.shields.io/conda/dn/bioconda/influx_si.svg?style=flat
   :target: https://anaconda.org/bioconda/influx_si
   :alt:   (downloads)
.. |docker_influx_si| image:: https://quay.io/repository/biocontainers/influx_si/status
   :target: https://quay.io/repository/biocontainers/influx_si
.. _`influx_si/tags`: https://quay.io/repository/biocontainers/influx_si?tab=tags


.. raw:: html

    <script>
        var package = "influx_si";
        var versions = ["7.0.1","7.0","6.1","6.0.4","6.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/influx_si/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/influx_si/README.html