:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methurator'
.. highlight: bash

methurator
==========

.. conda:recipe:: methurator
   :replaces_section_title:
   :noindex:

   Python package designed to estimate sequencing saturation for reduced\-representation bisulfite sequencing \(RRBS\) data.

   :homepage: https://github.com/VIBTOBIlab/methurator
   :license: MIT
   :recipe: /`methurator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methurator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methurator/meta.yaml>`_

   


.. conda:package:: methurator

   |downloads_methurator| |docker_methurator|

   :versions:
      
      

      ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on htslib: ``>=1.21,<1.23.0a0``
   :depends on matplotlib-base: 
   :depends on methyldackel: ``0.6.1.*``
   :depends on numpy: 
   :depends on packaging: ``>=24``
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.14``
   :depends on pyyaml: 
   :depends on rich: 
   :depends on rich-click: 
   :depends on samtools: ``>=1.21``
   :depends on scipy: 
   :depends on tqdm: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install methurator

to add into an existing workspace instead, run::

    pixi add methurator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methurator

Alternatively, to install into a new environment, run::

    conda create -n envname methurator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methurator:<tag>

(see `methurator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methurator| image:: https://img.shields.io/conda/dn/bioconda/methurator.svg?style=flat
   :target: https://anaconda.org/bioconda/methurator
   :alt:   (downloads)
.. |docker_methurator| image:: https://quay.io/repository/biocontainers/methurator/status
   :target: https://quay.io/repository/biocontainers/methurator
.. _`methurator/tags`: https://quay.io/repository/biocontainers/methurator?tab=tags


.. raw:: html

    <script>
        var package = "methurator";
        var versions = ["2.1.1","2.1.0","2.0.0","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methurator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methurator/README.html