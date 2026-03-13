:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biodigest'
.. highlight: bash

biodigest
=========

.. conda:recipe:: biodigest
   :replaces_section_title:
   :noindex:

   In silico Validation of Disease and Gene sets\, Clusterings or Subnetworks \(DIGEST\)

   :homepage: http://pypi.python.org/pypi/biodigest/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`biodigest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodigest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodigest/meta.yaml>`_

   


.. conda:package:: biodigest

   |downloads_biodigest| |docker_biodigest|

   :versions:
      
      

      ``0.2.16-2``,  ``0.2.16-1``,  ``0.2.16-0``

      

   
   :depends on biothings_client: ``0.2.6``
   :depends on graph-tool: ``>=2.58``
   :depends on gseapy: ``0.10.5``
   :depends on numpy: ``1.24.3``
   :depends on pandas: ``1.5.2``
   :depends on psutil: ``5.9.0``
   :depends on pycairo: ``>=1.21.0``
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.28.2``
   :depends on scipy: ``1.8.0``
   :depends on seaborn: ``>=0.12.2``

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

    pixi global install biodigest

to add into an existing workspace instead, run::

    pixi add biodigest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biodigest

Alternatively, to install into a new environment, run::

    conda create -n envname biodigest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biodigest:<tag>

(see `biodigest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biodigest| image:: https://img.shields.io/conda/dn/bioconda/biodigest.svg?style=flat
   :target: https://anaconda.org/bioconda/biodigest
   :alt:   (downloads)
.. |docker_biodigest| image:: https://quay.io/repository/biocontainers/biodigest/status
   :target: https://quay.io/repository/biocontainers/biodigest
.. _`biodigest/tags`: https://quay.io/repository/biocontainers/biodigest?tab=tags


.. raw:: html

    <script>
        var package = "biodigest";
        var versions = ["0.2.16","0.2.16","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biodigest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biodigest/README.html