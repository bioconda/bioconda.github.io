:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplify'
.. highlight: bash

amplify
=======

.. conda:recipe:: amplify
   :replaces_section_title:
   :noindex:

   Attentive deep learning model for antimicrobial peptide prediction

   :homepage: https://github.com/bcgsc/AMPlify
   :license: GPL / GPL-3
   :recipe: /`amplify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify/meta.yaml>`_

   


.. conda:package:: amplify

   |downloads_amplify| |docker_amplify|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on absl-py: ``<2``
   :depends on biopython: 
   :depends on h5py: ``<3``
   :depends on keras: ``2.2.4.*``
   :depends on numpy: ``<1.17``
   :depends on pandas: 
   :depends on python: ``3.6.*``
   :depends on scikit-learn: 
   :depends on tensorflow: ``>=1.10,<1.13``

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

    pixi global install amplify

to add into an existing workspace instead, run::

    pixi add amplify

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amplify

Alternatively, to install into a new environment, run::

    conda create -n envname amplify

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amplify:<tag>

(see `amplify/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amplify| image:: https://img.shields.io/conda/dn/bioconda/amplify.svg?style=flat
   :target: https://anaconda.org/bioconda/amplify
   :alt:   (downloads)
.. |docker_amplify| image:: https://quay.io/repository/biocontainers/amplify/status
   :target: https://quay.io/repository/biocontainers/amplify
.. _`amplify/tags`: https://quay.io/repository/biocontainers/amplify?tab=tags


.. raw:: html

    <script>
        var package = "amplify";
        var versions = ["2.0.1","2.0.0","2.0.0","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplify/README.html