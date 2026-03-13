:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'truvari'
.. highlight: bash

truvari
=======

.. conda:recipe:: truvari
   :replaces_section_title:
   :noindex:

   Structural variant comparison tool for VCFs.

   :homepage: https://github.com/ACEnglish/truvari
   :documentation: https://github.com/acenglish/truvari/wiki
   
   :license: MIT / MIT
   :recipe: /`truvari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari/meta.yaml>`_

   


.. conda:package:: truvari

   |downloads_truvari| |docker_truvari|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4.0-0</code>,  <code>5.3.0-0</code>,  <code>5.2.0-0</code>,  <code>5.1.1-0</code>,  <code>5.1.0-0</code>,  <code>5.0.0-0</code>,  <code>4.3.1-0</code>,  <code>4.3.0-0</code>,  <code>4.2.2-0</code>,  </span></summary>
      

      ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.0-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.2-0``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``0.1.2018.08.10-2``,  ``0.1.2018.08.10-1``,  ``0.1.2018.08.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwapy: ``>=0.1.4``
   :depends on intervaltree: ``>=3.1``
   :depends on joblib: ``>=1.2.0``
   :depends on mafft: ``>=7.515``
   :depends on pandas: ``>=1.5.3``
   :depends on psutil: 
   :depends on pyabpoa: ``>=1.4.3``
   :depends on pysam: ``>=0.22``
   :depends on pytabix: ``>=0.1``
   :depends on python: ``>=3.8``
   :depends on python-edlib: ``>=1.3.9``
   :depends on pywfa: ``>=0.5.1``
   :depends on rich: ``>=12.5.1``

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

    pixi global install truvari

to add into an existing workspace instead, run::

    pixi add truvari

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install truvari

Alternatively, to install into a new environment, run::

    conda create -n envname truvari

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/truvari:<tag>

(see `truvari/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_truvari| image:: https://img.shields.io/conda/dn/bioconda/truvari.svg?style=flat
   :target: https://anaconda.org/bioconda/truvari
   :alt:   (downloads)
.. |docker_truvari| image:: https://quay.io/repository/biocontainers/truvari/status
   :target: https://quay.io/repository/biocontainers/truvari
.. _`truvari/tags`: https://quay.io/repository/biocontainers/truvari?tab=tags


.. raw:: html

    <script>
        var package = "truvari";
        var versions = ["5.4.0","5.3.0","5.2.0","5.1.1","5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/truvari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/truvari/README.html