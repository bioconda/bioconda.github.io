:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'profile_dists'
.. highlight: bash

profile_dists
=============

.. conda:recipe:: profile_dists
   :replaces_section_title:
   :noindex:

   Profile Dists\: Rapid calcualtion of allele profile distances and distance base querying

   :homepage: https://pypi.org/project/profile-dists
   :developer docs: https://github.com/phac-nml/profile_dists/
   :license: Apache-2.0
   :recipe: /`profile_dists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/profile_dists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/profile_dists/meta.yaml>`_

   


.. conda:package:: profile_dists

   |downloads_profile_dists| |docker_profile_dists|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fastparquet: ``>=2023.4.0``
   :depends on numba: ``>=0.57.1,<=0.61.2``
   :depends on numpy: ``>=1.24.4,<2.0.0``
   :depends on pandas: ``>=2.0.2,<2.2.0``
   :depends on psutil: 
   :depends on pyarrow: ``>=12.0.0``
   :depends on pytables: ``>=3.8.0``
   :depends on python: ``>=3.8,<3.12``
   :depends on six: ``>=1.16.0``

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

    pixi global install profile_dists

to add into an existing workspace instead, run::

    pixi add profile_dists

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install profile_dists

Alternatively, to install into a new environment, run::

    conda create -n envname profile_dists

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/profile_dists:<tag>

(see `profile_dists/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_profile_dists| image:: https://img.shields.io/conda/dn/bioconda/profile_dists.svg?style=flat
   :target: https://anaconda.org/bioconda/profile_dists
   :alt:   (downloads)
.. |docker_profile_dists| image:: https://quay.io/repository/biocontainers/profile_dists/status
   :target: https://quay.io/repository/biocontainers/profile_dists
.. _`profile_dists/tags`: https://quay.io/repository/biocontainers/profile_dists?tab=tags


.. raw:: html

    <script>
        var package = "profile_dists";
        var versions = ["1.0.10","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/profile_dists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/profile_dists/README.html