:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo2-errorcorrection'
.. highlight: bash

soapdenovo2-errorcorrection
===========================

.. conda:recipe:: soapdenovo2-errorcorrection
   :replaces_section_title:
   :noindex:

   Error correction for soapdenovo2.

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapdenovo2-errorcorrection <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-errorcorrection>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-errorcorrection/meta.yaml>`_

   


.. conda:package:: soapdenovo2-errorcorrection

   |downloads_soapdenovo2-errorcorrection| |docker_soapdenovo2-errorcorrection|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  <code>2.0-1</code>,  </span></summary>
      

      ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install soapdenovo2-errorcorrection

to add into an existing workspace instead, run::

    pixi add soapdenovo2-errorcorrection

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soapdenovo2-errorcorrection

Alternatively, to install into a new environment, run::

    conda create -n envname soapdenovo2-errorcorrection

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soapdenovo2-errorcorrection:<tag>

(see `soapdenovo2-errorcorrection/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soapdenovo2-errorcorrection| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-errorcorrection.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo2-errorcorrection
   :alt:   (downloads)
.. |docker_soapdenovo2-errorcorrection| image:: https://quay.io/repository/biocontainers/soapdenovo2-errorcorrection/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-errorcorrection
.. _`soapdenovo2-errorcorrection/tags`: https://quay.io/repository/biocontainers/soapdenovo2-errorcorrection?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo2-errorcorrection";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-errorcorrection/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-errorcorrection/README.html