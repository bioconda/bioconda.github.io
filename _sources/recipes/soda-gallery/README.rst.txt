:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soda-gallery'
.. highlight: bash

soda-gallery
============

.. conda:recipe:: soda-gallery
   :replaces_section_title:
   :noindex:

   Python\-based UCSC genome browser gallery generator

   :homepage: https://github.com/alexpreynolds/soda
   :documentation: https://github.com/alexpreynolds/soda/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`soda-gallery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soda-gallery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soda-gallery/meta.yaml>`_

   


.. conda:package:: soda-gallery

   |downloads_soda-gallery| |docker_soda-gallery|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends on beautifulsoup4: ``>=4.9.3``
   :depends on certifi: ``>=2024.2.2``
   :depends on jinja2: ``>=3.0.1``
   :depends on pdfminer: ``>=20191125``
   :depends on pdfrw: ``>=0.4``
   :depends on python: ``>=3``
   :depends on requests: ``>=2.25.1``
   :depends on requests-kerberos: ``>=0.12.0``

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

    pixi global install soda-gallery

to add into an existing workspace instead, run::

    pixi add soda-gallery

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soda-gallery

Alternatively, to install into a new environment, run::

    conda create -n envname soda-gallery

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soda-gallery:<tag>

(see `soda-gallery/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soda-gallery| image:: https://img.shields.io/conda/dn/bioconda/soda-gallery.svg?style=flat
   :target: https://anaconda.org/bioconda/soda-gallery
   :alt:   (downloads)
.. |docker_soda-gallery| image:: https://quay.io/repository/biocontainers/soda-gallery/status
   :target: https://quay.io/repository/biocontainers/soda-gallery
.. _`soda-gallery/tags`: https://quay.io/repository/biocontainers/soda-gallery?tab=tags


.. raw:: html

    <script>
        var package = "soda-gallery";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soda-gallery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soda-gallery/README.html