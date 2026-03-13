:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'influx_si'
.. highlight: bash

influx_si
=========

.. conda:recipe:: influx_si
   :replaces_section_title:
   :noindex:

   Metabolic flux and concentration estimation based on stable isotope labeling

   :homepage: https://github.com/sgsokol/influx/
   :documentation: https://influx-si.readthedocs.io/
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`influx_si <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si/meta.yaml>`_

   To install this package from bioconda run\:
   \`conda install \-c conda\-forge \-c bioconda influx\_si\`



.. conda:package:: influx_si

   |downloads_influx_si| |docker_influx_si|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.4.3-0</code>,  <code>7.4.2-0</code>,  <code>7.4.1-0</code>,  <code>7.4.0-1</code>,  <code>7.4.0-0</code>,  <code>7.3.0-1</code>,  <code>7.3.0-0</code>,  <code>7.2.4-0</code>,  <code>7.2.3-0</code>,  </span></summary>
      

      ``7.4.3-0``,  ``7.4.2-0``,  ``7.4.1-0``,  ``7.4.0-1``,  ``7.4.0-0``,  ``7.3.0-1``,  ``7.3.0-0``,  ``7.2.4-0``,  ``7.2.3-0``,  ``7.2.2-0``,  ``7.2.1-0``,  ``7.2.0-0``,  ``7.1.0-0``,  ``7.0.4-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-0``,  ``7.0-0``,  ``6.1-0``,  ``6.0.4-1``,  ``6.0.4-0``,  ``6.0.1-0``,  ``6.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on asteval: 
   :depends on kvh: 
   :depends on packaging: 
   :depends on pandas: 
   :depends on python: ``>=3.5``
   :depends on python-libsbml: 
   :depends on r-arrapply: 
   :depends on r-base: 
   :depends on r-bitops: 
   :depends on r-kvh: 
   :depends on r-limsolve: 
   :depends on r-multbxxc: 
   :depends on r-nlsic: ``>=1.1.0``
   :depends on r-rcpp: ``>=1.0.0``
   :depends on r-rcpparmadillo: 
   :depends on r-rmumps: ``>=5.2.1_12``
   :depends on r-slam: 
   :depends on scipy: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install influx_si

to add into an existing workspace instead, run::

    pixi add influx_si

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install influx_si

Alternatively, to install into a new environment, run::

    conda create -n envname influx_si

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/influx_si:<tag>

(see `influx_si/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_influx_si| image:: https://img.shields.io/conda/dn/bioconda/influx_si.svg?style=flat
   :target: https://anaconda.org/bioconda/influx_si
   :alt:   (downloads)
.. |docker_influx_si| image:: https://quay.io/repository/biocontainers/influx_si/status
   :target: https://quay.io/repository/biocontainers/influx_si
.. _`influx_si/tags`: https://quay.io/repository/biocontainers/influx_si?tab=tags


.. raw:: html

    <script>
        var package = "influx_si";
        var versions = ["7.4.3","7.4.2","7.4.1","7.4.0","7.4.0"];
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