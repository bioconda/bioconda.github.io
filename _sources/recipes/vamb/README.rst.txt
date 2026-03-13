:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vamb'
.. highlight: bash

vamb
====

.. conda:recipe:: vamb
   :replaces_section_title:
   :noindex:

   Variational autoencoder for metagenomic binning.

   :homepage: https://github.com/RasmussenLab/vamb
   :documentation: https://vamb.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`vamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.10.25.620172`, biotools: :biotools:`vamb`

   


.. conda:package:: vamb

   |downloads_vamb| |docker_vamb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.4-0</code>,  <code>5.0.3-0</code>,  <code>4.1.3-0</code>,  <code>3.0.2-2</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``5.0.4-0``,  ``5.0.3-0``,  ``4.1.3-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.1.0-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dadaptation: ``>=3.2``
   :depends on loguru: ``>=0.7.0,<0.8``
   :depends on networkx: ``>=3.4.2``
   :depends on numpy: ``>=1.26.4,<3``
   :depends on pycoverm: ``>=0.6.2``
   :depends on pyhmmer: ``>=0.10.15``
   :depends on pyrodigal: ``>=3.6.3``
   :depends on python: ``>=3.10,<4``
   :depends on pytorch: ``>=2.6.0``
   :depends on scikit-learn: ``>=1.6.1``
   :depends on vambcore: ``>=0.1.2,<0.2``

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

    pixi global install vamb

to add into an existing workspace instead, run::

    pixi add vamb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vamb

Alternatively, to install into a new environment, run::

    conda create -n envname vamb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vamb:<tag>

(see `vamb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vamb| image:: https://img.shields.io/conda/dn/bioconda/vamb.svg?style=flat
   :target: https://anaconda.org/bioconda/vamb
   :alt:   (downloads)
.. |docker_vamb| image:: https://quay.io/repository/biocontainers/vamb/status
   :target: https://quay.io/repository/biocontainers/vamb
.. _`vamb/tags`: https://quay.io/repository/biocontainers/vamb?tab=tags


.. raw:: html

    <script>
        var package = "vamb";
        var versions = ["5.0.4","5.0.3","4.1.3","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vamb/README.html