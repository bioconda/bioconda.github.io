:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-gripss'
.. highlight: bash

hmftools-gripss
===============

.. conda:recipe:: hmftools-gripss
   :replaces_section_title:
   :noindex:

   GRIPSS applies a set of filtering and post processing steps on GRIDSS paired tumor\-normal output to produce a high confidence set of somatic SV for a tumor sample.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/gripss
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-gripss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss/meta.yaml>`_

   


.. conda:package:: hmftools-gripss

   |downloads_hmftools-gripss| |docker_hmftools-gripss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-0</code>,  <code>2.3.5-0</code>,  <code>2.3.2-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.11-0</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  </span></summary>
      

      ``2.4-0``,  ``2.3.5-0``,  ``2.3.2-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.11-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``

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

    pixi global install hmftools-gripss

to add into an existing workspace instead, run::

    pixi add hmftools-gripss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-gripss

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-gripss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-gripss:<tag>

(see `hmftools-gripss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-gripss| image:: https://img.shields.io/conda/dn/bioconda/hmftools-gripss.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-gripss
   :alt:   (downloads)
.. |docker_hmftools-gripss| image:: https://quay.io/repository/biocontainers/hmftools-gripss/status
   :target: https://quay.io/repository/biocontainers/hmftools-gripss
.. _`hmftools-gripss/tags`: https://quay.io/repository/biocontainers/hmftools-gripss?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-gripss";
        var versions = ["2.4","2.3.5","2.3.2","2.2","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-gripss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-gripss/README.html