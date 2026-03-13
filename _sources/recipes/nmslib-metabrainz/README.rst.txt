:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmslib-metabrainz'
.. highlight: bash

nmslib-metabrainz
=================

.. conda:recipe:: nmslib-metabrainz
   :replaces_section_title:
   :noindex:

   Non\-Metric Space Library \(NMSLIB\).

   :homepage: https://github.com/nmslib/nmslib
   :license: APACHE / Apache-2.0 AND MIT
   :recipe: /`nmslib-metabrainz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmslib-metabrainz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmslib-metabrainz/meta.yaml>`_

   


.. conda:package:: nmslib-metabrainz

   |downloads_nmslib-metabrainz| |docker_nmslib-metabrainz|

   :versions:
      
      

      ``2.1.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.21,<3``
   :depends on psutil: 
   :depends on pybind11: ``>=2.2.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install nmslib-metabrainz

to add into an existing workspace instead, run::

    pixi add nmslib-metabrainz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nmslib-metabrainz

Alternatively, to install into a new environment, run::

    conda create -n envname nmslib-metabrainz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nmslib-metabrainz:<tag>

(see `nmslib-metabrainz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nmslib-metabrainz| image:: https://img.shields.io/conda/dn/bioconda/nmslib-metabrainz.svg?style=flat
   :target: https://anaconda.org/bioconda/nmslib-metabrainz
   :alt:   (downloads)
.. |docker_nmslib-metabrainz| image:: https://quay.io/repository/biocontainers/nmslib-metabrainz/status
   :target: https://quay.io/repository/biocontainers/nmslib-metabrainz
.. _`nmslib-metabrainz/tags`: https://quay.io/repository/biocontainers/nmslib-metabrainz?tab=tags


.. raw:: html

    <script>
        var package = "nmslib-metabrainz";
        var versions = ["2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmslib-metabrainz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmslib-metabrainz/README.html